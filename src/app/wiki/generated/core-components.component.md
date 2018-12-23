Frames
------

Frames are self-contained sections of the Poset. They are composed of Roots 
and regular Poset Events, where Roots are the base on top of which Events 
can be inserted. Basically, Frames form a valid foundation for a new Poset,
such that gossip-about-gossip routines are not discontinued, while earlier 
records of the gossip history are ignored. 

```go
type Frame struct {
	Round  int     //RoundReceived
	Roots  []Root  //[participant ID] => Root
	Events []Event //Events with RoundReceived = Round
}
```

A Frame corresponds to a Poset consensus round. Indeed, the consensus 
algorithm commits Events in batches, which we map onto Frames, and finally onto 
a Blockchain. This is an evolution of the previously defined :ref:`blockchain 
mapping <blockchain>`. Block headers now contain a Frame hash. As we will see 
later, this is useful for security. The Events in a Frame are the Events of the 
corresponding batch, in consensus order.

.. image:: assets/dag_frames_bx.png

Roots
-----

Frames also contain Roots. To get an understanding for why this is necessary, we
must consider the initial state of a Poset, i.e., the base on top of which 
the first Events are inserted. 

The Poset is an interlinked chain of Events, where each Event contains two 
references to anterior Events (SelfParent and OtherParent). Upon inserting an 
Event in the Poset, we check that its references point to existing Events 
(Events that are already in the Poset) and that at least the SelfParent 
reference is not empty. This is partially illustrated in the following picture 
where Event A2 cannot be inserted because its references are unknown. 

.. image:: assets/roots_0.png

So what about the first Event? Until now, we simply implemented a special case, 
whereby the first Event for any participant, could be inserted without checking 
its references. In fact the above picture shows that Events A0, B0, and C0, have
empty references, and yet they are part of the Poset. This special case is 
fine as long as we do not expect to initialize Posets from a 'non-zero' 
state.

We introduced the concept of Roots to remove the special case and handle more
general situations. They make it possible to initialize a Poset from a 
section of an existing Poset, and discard everything below it.

.. image:: assets/roots_1.png

A Root is a data structure containing condensed information about the ancestors 
of the first Events to be added to the Poset. Each participant has a Root,
containing a *SelfParent* - the direct ancestor of the first Event for the 
corresponding participant - and *Others* - a map of Event hashes to the 
corresponding Other-Parents. These parents are instances of the **RootEvent** 
object, which is a minimal version of the Poset Event. RootEvents contain
information about the Index, Round, and LamportTimestamp of the corresponding 
Events. The Root itself contains a NextRound field, which helps in calculating 
the Round of its direct descendant.

```go
type Root struct {
  NextRound  int
  SelfParent RootEvent
  Others     map[string]RootEvent
}

type RootEvent struct {
  Hash             string
  CreatorID        int
  Index            int
  LamportTimestamp int
  Round            int
}
```
