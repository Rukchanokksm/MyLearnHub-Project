/* eslint-disable no-undef */
import { useLottie } from "lottie-react"
import LoadingData from "../londing.json"

const style = {
  height: 300,
}

const Loading = () => {
  const options = {
    animationData: LoadingData,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default Loading
//Buggggggggg!!!
