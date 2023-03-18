import Component from './core/Component';

interface State {}

export default class AppComponent extends Component<State> {
  constructor(target: HTMLDivElement) {
    const state: State = {};
    super(target, state);
  }

  template() {
    return /* html */ `
      <header></header>
      <main></main>
      <nav id="bottom-nav_bar"></nav>
    `;
  }
}
