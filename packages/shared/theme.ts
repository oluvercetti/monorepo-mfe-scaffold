

export const defaultTheme = {
    backgroundPrimary: "#1659E6",
    textPrimary: "#333333",
    borderColor:"EBEBEB",
    textSecondary: "#808080",
}    

let currentTheme = {...defaultTheme}
export const setTheme = (newTheme: Partial<typeof defaultTheme>) => {
    currentTheme = { ...currentTheme, ...newTheme };
};
export const getTheme = () => currentTheme