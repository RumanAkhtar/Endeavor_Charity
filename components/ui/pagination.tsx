import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

const Pagination = ({ currentPage, totalPages, basePath }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center space-x-2">
        {currentPage > 1 && (
          <Link
            href={`${basePath}/${currentPage - 1}`}
            className="flex items-center justify-center w-8 h-8 text-gray-600 transition-colors border border-gray-300 rounded-full hover:bg-[#26d6a5] hover:text-white hover:border-[#26d6a5]"
          >
            <ChevronLeft size={16} />
          </Link>
        )}
        {pageNumbers.map((number) => (
          <Link
            key={number}
            href={`${basePath}/${number}`}
            className={`flex items-center justify-center w-8 h-8 transition-colors rounded-full ${
              currentPage === number
                ? "bg-[#26d6a5] text-white"
                : "text-gray-600 border border-gray-300 hover:bg-[#26d6a5] hover:text-white hover:border-[#26d6a5]"
            }`}
          >
            {number}
          </Link>
        ))}
        {currentPage < totalPages && (
          <Link
            href={`${basePath}/${currentPage + 1}`}
            className="flex items-center justify-center w-8 h-8 text-gray-600 transition-colors border border-gray-300 rounded-full hover:bg-[#26d6a5] hover:text-white hover:border-[#26d6a5]"
          >
            <ChevronRight size={16} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Pagination

