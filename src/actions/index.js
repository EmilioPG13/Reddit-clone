// BoardHeader.jsx actions
export const setBannerUrl = (url) => ({
    type: 'SET_BANNER_URL',
    payload: url,
});

export const setIconUrl = (url) => ({
    type: 'SET_ICON_URL',
    payload: url,
});

// Header.jsx actions
export const toggleDarkMode = () => ({
    type: 'TOGGLE_DARK_MODE'
});