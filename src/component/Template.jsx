import Dutchess from "./templates/Dutchess"
import Neo from "./templates/Neo"

const Template = ({selectedTemplate}) => {
  return (
      <section>
          {selectedTemplate.name === "dutchess" ? <Dutchess/>: selectedTemplate.name === "neo" ? <Neo/> : null}
    </section>
  )
}
export default Template