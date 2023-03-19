import Component from "./core/Component";

import "./scss/reset.scss";
import { Header, BottomNavigation } from "./components";

interface State {}

export default class AppComponent extends Component<State> {
	constructor(target: HTMLDivElement) {
		const state: State = {};
		super(target, state);
	}

	componentDidMount() {
		new Header(document.querySelector("#header") as HTMLElement);
		new BottomNavigation(document.querySelector("#bottom-navigation") as HTMLElement);
	}

	template() {
		return /* html */ `
      <header id="header"></header>
      <main></main>
      <nav id="bottom-navigation"></nav>
    `;
	}
}
