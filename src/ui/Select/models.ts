export interface DefaultSelectProps {
	items?: any[];
	label?: string;
	placeholder?: string;
	keyLabel?: string;
	keyValue?: string;
	errorMessage?: string;
	error?: boolean;
	onChange?: (value: any) => void;
	helperText?: string;
	useSelectAll?: boolean;
	selectAllText?: string;
}
