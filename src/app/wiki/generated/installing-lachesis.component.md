This guide has been moved to: https://fantom-foundation.github.io/guide/getting-started

---

### Lachesis and dependencies
Clone the [repository](https://github.com/andrecronje/lachesis) in the appropriate
GOPATH subdirectory:

```bash
$ mkdir -p $GOPATH/src/github.com/andrecronje/
$ cd $GOPATH/src/github.com/andrecronje
[...]/andrecronje$ git clone https://github.com/andrecronje/lachesis.git
```
Lachesis uses [Glide](http://github.com/Masterminds/glide) to manage dependencies.

```bash
[...]/lachesis$ curl https://glide.sh/get | sh
[...]/lachesis$ glide install
```
This will download all dependencies and put them in the **vendor** folder.