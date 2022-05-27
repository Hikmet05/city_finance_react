import './button.css';

function Button({text,btn_width}) {
  return (
    <>
        <button className="primary_btn" style={{width:btn_width}}>{text}</button>
    </>
  )
}

export default Button;