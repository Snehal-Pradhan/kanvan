const VARIANTS = {
  primary: 'kv-btn-primary',
  secondary: 'kv-btn-secondary',
  ghost: 'kv-btn-ghost',
  danger: 'kv-btn-danger',
};

export function Button({
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${VARIANTS[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
