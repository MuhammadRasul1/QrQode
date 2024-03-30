import Select from 'react-select'
import { useGroupsProps } from '../../useGroupsProps'
import makeAnimated from 'react-select/animated'
import cls from './styles.module.scss'

export const DynamicOption = () => {

       const animatedComponents = makeAnimated();

       const { setSelectedOption, register } = useGroupsProps()

       const { options } = useGroupsProps()

       return (
              <Select 
                     isMulti
                     onChange={(item) => setSelectedOption(item)}
                     className={cls.dynamic_select}
                     components={animatedComponents}
                     options={options}
                     isClearable={true}
                     isSearchable={true}
                     isDisabled={false}
                     isLoading={false}
                     isRtl={false}
                     placeholder="Выберите дни"
                     // {...register("time")}
                     closeMenuOnSelect={false}
              />
       )
}