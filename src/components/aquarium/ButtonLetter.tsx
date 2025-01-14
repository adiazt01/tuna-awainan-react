
const querySearch = new URLSearchParams(window.location.search);
const nameQueryToSearch = querySearch.get('selected');
const name = nameQueryToSearch || "";

export function ButtonLetter({ letter }){

    return(
    <a
      type="button"
      href={`/aquarium/letter?selected=${letter}`}
      className={[
        "cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm text-center inline-flex items-center font-bold me-2 px-3.5 py-2.5 hover:bg-[#0cc0df] hover:opacity-80 transition",
        name === letter ? "bg-white text-#0cc0df" : "text-white hover:text-#0cc0df hover:text-white"
      ].join(' ')}
    >
      {`${letter}`}
      <span className="sr-only">{`${letter}`}</span>
      <span className="sr-only">{"B"}</span>

    </a>
    )

}
