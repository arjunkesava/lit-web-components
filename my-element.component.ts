import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import install from '@twind/with-web-components';
import core from './twind.config';

@customElement('my-element')
@install(core)
export class MyElement extends LitElement {

    render() {
        return html`
      <main class="h-screen bg-blue-400 flex items-center justify-center">
        <h1 class="font-bold text(center 5xl white sm:gray-800 md:pink-700)">Welcome Kid!</h1>
      </main>
    `
    }
}
