interface LoginFormProps {
  onSubmit: (data: FormData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" type="email" name="email" />
      <input placeholder="Пароль" type="password" name="password" />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
