# 使用 Node.js 官方 LTS 版本作为基础镜像
FROM node:lts AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制应用代码到工作目录
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 第二阶段：生成最终镜像
FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 从第一阶段复制构建好的应用到当前镜像
COPY --from=builder /app .

# 暴露应用端口（如果需要）
EXPOSE 3000

# 启动 Next.js 应用
CMD ["npm", "start"]
