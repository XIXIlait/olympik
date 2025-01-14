import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard'
import Text from 'components/atoms/Text'
import Image from 'next/image'

interface ProjectCardProps extends LazyCardProps {
  title: string
  description: string
  detailPage: string
  imageUrl: string
}

const ProjectCard = ({
  title,
  description,
  detailPage,
  imageUrl,
  bottomSquareSize = 'small',
  height = 450,
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[450px]">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
      </div>
      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Détails"
            color="white"
            radius="pill"
            style="outline"
            href={detailPage}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
