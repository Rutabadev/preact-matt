import './style.scss'

export const Roller = ({ content, link, onClick }) => (
  <div class='roller'>
    <a class='first' href={link} native onClick={onClick}>{content}</a>
    <a class='second' href={link} native onClick={onClick}>{content}</a>
  </div>
)
