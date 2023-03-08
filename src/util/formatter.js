

export const formatValue = (value) => {
    return new Intl.NumberFormat('en-US').format(value)
}