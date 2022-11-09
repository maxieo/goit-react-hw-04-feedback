import PropTypes from 'prop-types'
import {StatData} from './Statistic.styled'

export const Statistic = ({ good, neutral, bad, total, positive }) => (
    <div>
      <StatData>Good: {good}</StatData>
      <StatData>Neutral: {neutral}</StatData>
      <StatData>Bad: {bad}</StatData>
      <StatData>Total: {total}</StatData>
      <StatData>Positive: {positive}%</StatData>
    </div>
    )
  
  


Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  gototalod: PropTypes.number.isRequired,
  positive:PropTypes.number.isRequired,
}
