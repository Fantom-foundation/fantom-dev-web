import { AfterViewInit, Compiler, Component, Input, NgModule, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit, AfterViewInit {
  @Input() template: string;
  @Input() styles: string[];

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private route: ActivatedRoute, private compiler: Compiler) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: {template: string, styles?: string[]}) => {
        this.template = data.template;
        this.styles = data.styles || [];
      });
  }

  ngAfterViewInit() {
    // Must clear cache.
    this.compiler.clearCache();

    // Define the component using Component decorator.
    const component = Component({
      template: this.template,
      styles: this.styles
    })(class {});

    // Define the module using NgModule decorator.
    const module = NgModule({
      declarations: [component]
    })(class {});

    // Asynchronously (recommended) compile the module and the component.
    this.compiler.compileModuleAndAllComponentsAsync(module)
      .then(factories => {
        // Get the component factory.
        const componentFactory = factories.componentFactories[0];
        // Create the component and add to the view.
        const componentRef = this.container.createComponent(componentFactory);
      });
  }
}
