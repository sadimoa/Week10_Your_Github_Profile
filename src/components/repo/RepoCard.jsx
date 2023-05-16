import React from 'react'

function RepoCard(props) {
  return (
    <div className='flex items-center gap-3 px-2 py-3 bg-white rounded border w-full '>
        <img style={{width: '100px'}} src="https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/f2/f5/f8/f2f5f844-f7f4-e90a-6281-517ca10a23e1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt="project" />
        <div className="project-info">
        <h4>{props.repo.name} </h4>
        <p className='language'>Most Used Language: {props.repo.language}</p>
        <p className='date'>Date: {props.repo.created_at}</p>
        </div>
    </div>
  )
}

export default RepoCard