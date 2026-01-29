import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
  console.log(pageLinks,'hello')
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default PageLinks