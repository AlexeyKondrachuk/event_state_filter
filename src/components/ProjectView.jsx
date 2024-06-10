function ProjectView(props) { 
    const {projects} = props
    return (
      <div className="portfolioList">{ projects.map((p, i) => <div key={`${p.category}_${i++}`}><img alt={p.category} src={p.img}/></div>) }</div>
    )
  }

  export default ProjectView