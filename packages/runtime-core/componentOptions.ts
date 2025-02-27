export type componentOptions = {
	props?: Record<string, any>;
	render?: Function;
	setup?: (
		props: Record<string, any>,
		ctx: { emit: (event: string, ...args: any[]) => void },
	) => Function | Record<string, unknown> | void;
	template?: string;
};
