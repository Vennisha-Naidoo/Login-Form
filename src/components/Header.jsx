import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>Welcome!</h1>
      <h5>Please Enter Login Credentials.</h5>
    </header>
  );
}
