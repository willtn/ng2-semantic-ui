import {
    Injectable, ApplicationRef, ComponentFactoryResolver, Injector, ComponentRef,
    ReflectiveInjector, Provider, Type, ViewContainerRef, TemplateRef
} from "@angular/core";

export interface IImplicitContext<T> {
    $implicit?:T;
}

@Injectable()
export class SuiComponentFactory {
    constructor(private _applicationRef:ApplicationRef,
                private _componentFactoryResolver:ComponentFactoryResolver,
                private _injector:Injector) {}

    public createComponent<T>(type:Type<T>, providers:Provider[] = []):ComponentRef<T> {
        // Resolve a factory for creating components of type `type`.
        const factory = this._componentFactoryResolver.resolveComponentFactory(type as Type<T>);

        // Resolve and create an injector with the specified providers.
        const injector = ReflectiveInjector.resolveAndCreate(
            providers,
            this._injector
        );

        // Create a component using the previously resolved factory & injector.
        const componentRef = factory.create(injector);

        return componentRef;
    }

    public createView<T, U extends IImplicitContext<T>>(viewContainer:ViewContainerRef, template:TemplateRef<U>, context:U):void {
        viewContainer.createEmbeddedView<U>(template, context);
    }

    // Inserts the component into the specified view container.
    public attachToView<T>(viewContainer:ViewContainerRef, componentRef:ComponentRef<T>):void {
        viewContainer.insert(componentRef.hostView, 0);
    }

    // Inserts the component in the root application node.
    public attachToApplication<T>(componentRef:ComponentRef<T>):void {
        this._applicationRef.attachView(componentRef.hostView);
    }

    // Moves the component to the specified DOM element.
    public moveToElement<T>(element:Element, componentRef:ComponentRef<T>):void {
        element.appendChild(componentRef.location.nativeElement);
    }

    // Moves the component to the document body.
    public moveToDocumentBody<T>(componentRef:ComponentRef<T>):void {
        this.moveToElement(document.querySelector("body"), componentRef);
    }
}
