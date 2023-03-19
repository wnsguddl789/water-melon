import Component from "../core/Component";

interface State {}

export default class TrendsView extends Component<State> {
	constructor(target: HTMLElement) {
		const state: State = {};
		super(target, state);
	}

	template() {
		return /* html */ `
            
        `;
	}
}
