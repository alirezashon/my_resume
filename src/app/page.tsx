import Resumali from "../Components/Resumali/page"
import styles from './page.module.css'
import ElectronicAtom from '../Components/ElectronicAtom/page'
import StarSelector from '../Components/TreeSelector/page'
const Main = () => {
  return (
    <div className={styles.container}>
      <Resumali />
      <ElectronicAtom/>
      <StarSelector/>
    </div>
  )
}
export default Main
