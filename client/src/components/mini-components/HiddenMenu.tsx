import { useSelector } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";
import { TypeStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setMenuHidden } from "../../redux/slices/styleSlice";

function HiddenMenu() {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const { menuHidden } = useSelector((st:TypeStore)=>st.style)

  const handleClick = ()=>{
    dispatch(setMenuHidden(!menuHidden))
  }

  return (
    <button 
      onClick={handleClick}
      className={`fixed bottom-0 stroke-neutral-800 stroke-2 w-12 m-2 transition-all hover:scale-110
        ${ width > 700 ? 'hidden' : ''} ${ menuHidden ? 'left-0' : 'left-14'}
      `}>
      {
        menuHidden 
        ? <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-sidebar-left-expand " viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M9 4v16" /><path d="M14 10l2 2l-2 2" />
      </svg>
        : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-sidebar-right-expand " viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M15 4v16" /><path d="M10 10l-2 2l2 2" />
      </svg>
      }
    </button>
  );
}

export default HiddenMenu;