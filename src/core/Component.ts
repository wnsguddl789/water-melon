export interface UnknownObject {
	[key: string]: string | number | boolean;
}

export default class Component<State> {
	target!: HTMLElement;
	state!: State;
	protected element?: HTMLElement;
	constructor(target: HTMLElement, state: State) {
		this.target = target;
		this.initialState(state);
	}

	protected initialState(initialState?: State) {
		if (!initialState) {
			this.render();
			return;
		}
		this.setState(initialState);
	}

	protected componentDidMount() {}

	protected setState(nextState: State) {
		this.state = { ...this.state, ...nextState };
		this.render();
	}

	protected template() {
		return ``;
	}

	protected render() {
		this.element = this.target;
		this.element.innerHTML = this.template();

		this.componentDidMount();
	}
}
