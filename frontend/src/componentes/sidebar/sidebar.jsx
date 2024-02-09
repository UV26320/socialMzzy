import Conversations from "./Conversations"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3">
      <Conversations />
      </div>
    </div>
  )
}

export default Sidebar
