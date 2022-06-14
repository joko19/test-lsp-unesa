export default function Kubus() {

    return (
        <div className="flex bg-gray-100 mt-4 p-4 rounded-lg gap-4">
            <div>
                <h1>Kubus</h1>
                <img className="hover:bg-gray-100 cursor-pointer md:w-36 md:h-36" src='/images/kubus.png' />
                <div className="bg-white p-2 text-center rounded">
                    L = s x s x s
                </div>
            </div>
            <div className="flex">
                <input type="text" />
            </div>
        </div>
    )
}