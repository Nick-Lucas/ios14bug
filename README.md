## Minimal reproduction of an iOS 14.0 bug with Safari and the new Date pickers

[Before Submit Image](./docs/before-submit.png)

[After Submit Image](./docs/after-submit.png)

[iOS 14.0 Reproduction Recording](./docs/simulator-ios-14.0.mov) or on [Youtube](https://youtu.be/0XK0okaJ6zA)

[iOS 12.4 Working Fine Recording](./docs/simulator-ios-12.4.mov) or on [Youtube](https://youtu.be/gWIGsorprkU)

## FAQ

##### What specifically  are the steps to reproduce?

1. Render a `<form />` containing a `<input type="date />` and `<button />` plus some validation on the input
1. Open the date picker, create a validation error, correct the validation error, and then submit the form
1. On submission remove the form from the DOM
1. Notice the `<button />` does not de-paint, even though its parents have been removed from the DOM, and if you remove the whole DOM in dev tools it remains. Only reloading the page can fix this, and the button may appear on other pages until Safari is fully restarted.

##### Where exactly is the code which reproduces this?

[App.js](./src/App.js)

##### Can it be reproduced on a physical device?

Yes, we have reproduced the bug on an iPhone 7 (iOS 14.0 and iOS 14.0.1), iPhone X Max (iOS 14.0), and iPad Pro 11inch (iPadOS 14.0). The simulators are just helpful for screen recording.

---

![](./docs/simulator-ios-14.0.gif)
