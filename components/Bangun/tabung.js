export default function Tabung() {

    return (
        <div className="flex bg-gray-100 mt-4 p-4 rounded-lg gap-4">
            <div>
                <h1>Tabung</h1>
                <img className="hover:bg-gray-100 cursor-pointer md:w-36 md:h-36" src='/images/tabung.png' />
                <div className="bg-white p-2 text-center rounded">
                V = π x 2 x r x t
                </div>
            </div>
            <div className="flex">
                <input type="text" />
            </div>
        </div>
    )
}