export const Practice4 = () => {
    return (
        <div className="flex justify-center">
            <div>
                <p className="text-center">addressSearch</p>
                <div><label>郵便番号<input className="border" /></label></div>
                <div><label>都道府県<input className="border" /></label></div>
                <div><label>市区町村<input className="border" /></label></div>
                <button className="border border border-indigo-600 block mx-auto">送信</button>
            </div>
        </div>
    )
}