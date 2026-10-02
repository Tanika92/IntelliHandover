from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from Backend.database import Base


class Activity(Base):
    __tablename__ = "activities"

    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)
    file_id = Column(Integer, ForeignKey("files.id"), nullable=True)
    activity_type = Column(String, nullable=False)
    description = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False)