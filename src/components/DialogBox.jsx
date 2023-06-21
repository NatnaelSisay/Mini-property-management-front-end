import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const DialogBox = ({ open, handleClose, children }) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			fullWidth
			maxWidth="xl"
		>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};

export default DialogBox;
