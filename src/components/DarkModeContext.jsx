import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleDarkMode } from '../actions';

export function DarkModeProvider({ children }) {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);

    const handleToggleDarkmode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        dispatch(toggleDarkMode());
};

return (
        <div onClick={handleToggleDarkmode}>
            {children}
        </div>
    );
}

DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DarkModeProvider;