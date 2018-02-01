
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: new-stuff, @tag: component-partial }}
{{#with new-stuff}}
	{{> new-stuff}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
Veams.modules.add('new-stuff', NewStuff);
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for NewStuff
 */
EVENTS.newStuff = {
	eventName: 'newStuff:eventName'
};
// @INSERT :: END
```
