import "./Project12.css"

const Project12 = () => {
    return (
        <div className="chackedInput">
            <fieldset>
                <input type="checkbox" className="chip" role="switch" value="Pear" aria-label="Pear" />
                <input type="checkbox" className="chip" role="switch" value="Banana" aria-label="Banana"  checked />
                <input type="checkbox" className="chip" role="switch" value="Apple" aria-label="Apple"/>
                <input type="checkbox" className="chip" role="switch" value="Peach" aria-label="Peach"/>
            </fieldset>

            <fieldset>
                <input type="checkbox" className="chip grow" role="switch" value="Pear" aria-label="Pear" />
                <input type="checkbox" className="chip grow" role="switch" value="Banana" aria-label="Banana"  />
                <input type="checkbox" className="chip grow" role="switch" value="Apple" aria-label="Apple" />
                <input type="checkbox" className="chip grow" role="switch" value="Peach" aria-label="Peach"  />
            </fieldset>

            <fieldset>
                <input type="checkbox" className="chip bounce" role="switch" value="Pear" aria-label="Pear" />
                <input type="checkbox" className="chip bounce" role="switch" value="Banana" aria-label="Banana" />
                <input type="checkbox" className="chip bounce" role="switch" value="Apple" aria-label="Apple"   />
                <input type="checkbox" className="chip bounce" role="switch" value="Peach" aria-label="Peach"  />
            </fieldset>

            <fieldset>
                <input type="checkbox" className="chip bounce" role="switch" value="Pear" aria-label="Pear" disabled />
                <input type="checkbox" className="chip bounce" role="switch" value="Banana" aria-label="Banana" disabled />
                <input type="checkbox" className="chip bounce" role="switch" value="Apple" aria-label="Apple"  disabled />
                <input type="checkbox" className="chip bounce" role="switch" value="Peach" aria-label="Peach"  disabled />
            </fieldset>
        </div>
    )
}

export default Project12