export default function Footer() {
  return (
    <footer className="flex items-center justify-center py-7 bg-[#0f172a] border-t border-blue-500/10">
      <span className="md:text-md text-sm items-center flex text-snow/20">
        ClnsDzy's League &copy; {new Date().getFullYear()}&nbsp; | &nbsp;
        <a href="https://instagram.com/clnsdzyleague" className="flex items-center gap-1.5">
          Instagram 
          <lord-icon
              src="https://cdn.lordicon.com/tgyvxauj.json"
              trigger="hover"
              target="a"
              state="hover-rotate"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{width:'20px',height:'20px'}}>
          </lord-icon>
        </a>
      </span>
    </footer>
  )
}
