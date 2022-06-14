export default function Persegi() {

    return (
        <div className="flex bg-gray-100 mt-4 p-4 rounded-lg gap-4">
            <div>
                <h1>Persegi</h1>
                <img className="hover:bg-gray-100 cursor-pointer md:w-36 md:h-36" src='/images/persegi.png' />
                <div className="bg-white p-2 text-center rounded">
                    L = s x s
                </div>
            </div>
            <div className="flex">
                <input type="text" />
            </div>
        </div>
    )
}