import { Modal, Typography } from '@mui/material';
import DropdownLanguage from '../languageSelect';

const LangModal = () => {
  return (
    <Modal>
      <Typography variant="h6" component="h2">
        Select Language
      </Typography>
      <DropdownLanguage />
    </Modal>
  );
};

export default LangModal;
