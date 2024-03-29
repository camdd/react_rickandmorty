import React from "react"
import Gender from "./category/Gender"
import Species from "./category/Species"
import Status from "./category/Status"
import styles from "./Filter.module.scss"


const Filter = ({
    pageNumber, updatePageNumber,
    updateStatus, updateGender,
    updateSpecies,
  }) => {
  
    let clear = () => {
        updateStatus("")
        updateGender("")
        updateSpecies("")
        updatePageNumber(1)
        window.location.reload(false)
      }

    return (
    <div className="col-lg-3 col-12 mb-5">
        <div className="text-center fw-bold fs-4 mb-2">Filters</div>
        <div
        style={{ cursor: "pointer" }} onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
        > Clear Filters </div>
        <div className={`${styles.accordion} accordion`}id="accordionExample">
        <Status 
            className={`${styles.status}`}
            updatePageNumber={updatePageNumber}
            updateStatus={updateStatus}
        />
        <Species
            updatePageNumber={updatePageNumber}
            updateSpecies={updateSpecies}
        />
        <Gender
            updatePageNumber={updatePageNumber}
            updateGender={updateGender}
        />
        
        </div>
    </div>
    )
    }
export default Filter