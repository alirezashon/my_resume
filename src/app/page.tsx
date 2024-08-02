import Resumali from "../Components/Resumali/page"
import styles from './page.module.css'
import ElectronicAtom from '../Components/ElectronicAtom'
import TreeSelector from '../Components/TreeSelector'
const Main = () => {
  return (
    <div className={styles.container}>
      <Resumali />
      <ElectronicAtom/>
      <TreeSelector/>
    </div>
  )
}
export default Main
