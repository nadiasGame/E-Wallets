export default function Top(props){
  const { title, cardState } = props;
  return(
      <section>
          <h1>{title}</h1>
          <p className="card-state">{cardState}</p>
      </section>
  )
}