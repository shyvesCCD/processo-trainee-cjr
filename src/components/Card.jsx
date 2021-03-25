import './styles.css'

export default function Card({tag, title, description}) {
  return (
    <div className="container-card">
      <p id="tag-title">{tag}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}