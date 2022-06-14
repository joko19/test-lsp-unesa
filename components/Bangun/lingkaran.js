export default function Lingkaran() {

    return (
        <div className="flex bg-gray-100 mt-4 p-4 rounded-lg gap-4">
            <div>
                <h1>Lingkaran</h1>
                <img className="hover:bg-gray-100 cursor-pointer md:w-36 md:h-36" src='/images/lingkaran.png' />
                <div className="bg-white p-2 text-center rounded">
                    L= π x r²
                </div>
            </div>
            <div className="flex">
                <input type="text" />
            </div>
        </div>
    )
}