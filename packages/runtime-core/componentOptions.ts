export type componentOptions = {
	props?: Record<string, any>;
	render?: Function;
	setup?: (props: Record<string, any>) => Function;
};
