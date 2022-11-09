import PropTypes from 'prop-types'
import { Button } from './Feedback.styled'


export const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map(option => (
      <Button
        key={option}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </Button>
    ))}
  </div>
)

Feedback.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
