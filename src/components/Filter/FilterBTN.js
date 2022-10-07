import styles from "./Filter.module.scss"

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
    return (
    <div>
      <style jsx="">
        {`
          .x:checked + label {
            background-color: #F7F6DC;
            color: #7FB77E }
          input[type="radio"] { display: none; }
        `}
      </style>

    <div className="form-check">
        <input
            className="form-check-input x" type="radio"
            name={name} 
            id={`${name}-${index}`} />
        <label
            onClick={(x) => {
                task(input); updatePageNumber(1);
            }}
        className={`${styles.btn} btn`}
        htmlFor={`${name}-${index}`}
        > {input} 
        </label>
    </div>
</div>
);
};

export default FilterBTN