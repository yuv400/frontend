
function medicineResult({medicine}){
    return(
        <div>
            <h2>brand name: {medicine.name}</h2>
            <p>Genric name: {medicine.genericName}</p>
            <p>Manufacturer : {medicine.manufacturar}</p>
            <p>Manufacturer : {medicine.productType}</p>
        </div>
    )
}

export default medicineResult;