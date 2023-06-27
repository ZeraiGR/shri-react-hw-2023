import { RotateLoader } from 'react-spinners';
import { SPINNER_COLOR } from './constants';

export default function Loading() {
  return (
    <div className="wrapper">
      <RotateLoader color={SPINNER_COLOR} />
    </div>
  )
}